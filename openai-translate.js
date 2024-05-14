"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAITranslate = void 0;
const openai_1 = require("openai");
const util_1 = require("../util/util");
const lodash_1 = require("lodash");
async function translateSingleString(str, args) {
    var _a;
    const OPENAI_API_KEY = args.serviceConfig;
    if (!OPENAI_API_KEY || !OPENAI_API_KEY.trim().length) {
        (0, util_1.logFatal)('Missing OpenAI API Key: Please get an API key from https://platform.openai.com/account/api-keys and then call attranslate with --serviceConfig="YOUR API KEY"');
    }
    const configuration = new openai_1.Configuration({
        apiKey: OPENAI_API_KEY,
    });
    const openai = new openai_1.OpenAIApi(configuration);
    const prompt = generatePrompt(str, args);
    /**
     * https://platform.openai.com/docs/api-reference/completions/create
     * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
     * We generally recommend altering this or top_p but not both.
     */
    try {
        const completion = await openai.createCompletion({
            model: "gpt-3.5-turbo-instruct",
            prompt,
            temperature: 0.2,
            max_tokens: 2048,
        });
        const text = completion.data.choices[0].text;
        if (text == undefined) {
            (0, util_1.logFatal)("OpenAI returned undefined for prompt " + prompt);
        }
        return text;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (e) {
        if (typeof e.message === "string") {
            (0, util_1.logFatal)("OpenAI: " +
                e.message +
                ", Status text: " +
                JSON.stringify((_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.statusText));
        }
        else {
            throw e;
        }
    }
}
function generatePrompt(str, args) {
    const capitalizedText = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return (`Translate the following text from ${args.srcLng} into ${args.targetLng}: ` +
        capitalizedText);
}
async function translateBatch(batch, args) {
    console.log("Translate a batch of " + batch.length + " strings with OpenAI...");
    const promises = batch.map(async (tString) => {
        const rawResult = await translateSingleString(tString.value, args);
        const result = {
            key: tString.key,
            translated: rawResult.trim(),
        };
        return result;
    });
    const resolvedPromises = await Promise.all(promises);
    return resolvedPromises;
}
class OpenAITranslate {
    async translateStrings(args) {
        const batches = (0, lodash_1.chunk)(args.strings, 10);
        const results = [];
        for (const batch of batches) {
            const result = await translateBatch(batch, args);
            results.push(result);
        }
        return (0, lodash_1.flatten)(results);
    }
}
exports.OpenAITranslate = OpenAITranslate;
