import babel from "rollup-plugin-babel";

export default {
	entry: "src/main.jsx",
	format: "es6",
	plugins: [babel()],
	dest: "../public/bundle.js"
};
