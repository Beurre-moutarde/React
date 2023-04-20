import React from "react";

function Navigation(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul className="flex-row mobile-view">
				<li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
					<div onClick={() => setCurrentTab("about")}>About Me</div>
				</li>
				<li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
					<div onClick={() => setCurrentTab("portfolio")}>Portfolio</div>
				</li>
				<li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
					<div onClick={() => setCurrentTab("contact")}>Contact</div>
				</li>
				<li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
					<div onClick={() => setCurrentTab("resume")}>Resume</div>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
