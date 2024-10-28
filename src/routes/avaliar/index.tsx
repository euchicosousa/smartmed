import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = ({ redirect }) => {
	throw redirect(302, encodeURI("https://g.page/r/CeHPWvpmx-jOEAI/review"));
};
