
workspace.clientAdded.connect(function(client) {
	if (client.fullScreen) {
        client.blocksCompositing = true
	}
});
