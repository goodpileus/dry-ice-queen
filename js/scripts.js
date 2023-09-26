
	// init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {
    // duration: '100%'
  }});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#sec1"})
					.setClassToggle(".bg1", "active") // add class toggle
					.setClassToggle(".bg2", "active") // add class toggle
					// .setClassToggle("#bg", "inactive") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#sec2"})
					.setClassToggle(".bg2", "active") // add class toggle
					.setClassToggle(".bg3", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);