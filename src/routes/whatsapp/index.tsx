import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = (request) => {
	const source = request.url.searchParams.get("source");
	const especialista = request.url.searchParams.get("especialista");

	throw request.redirect(
		302,
		`https://wa.me/5588997925279?text=${
			especialista
				? "Gostaria de agendar uma Consulta de " + especialista + "."
				: "Gostaria de agendar uma Consulta."
		}${source ? encodeURI(" Vim através da página " + source) : ""}`
	);
};
