import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = (request) => {
	const source = request.url.searchParams.get("source");

	throw request.redirect(
		302,
		`https://wa.me/5588997925279?text=Gostaria de agendar uma consulta.${
			source ? encodeURI(" Vim através da página " + source) : ""
		}`
	);
};
