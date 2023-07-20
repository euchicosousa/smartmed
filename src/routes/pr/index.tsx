import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = ({ redirect }) => {
	throw redirect(302, encodeURI("/whatsapp?source=Instagram da SmartMed"));
};
