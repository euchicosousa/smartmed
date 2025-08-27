import { type RequestHandler } from "@builder.io/qwik-city";
import { especialidades } from "~/lib/data";

export const onGet: RequestHandler = (request) => {
  const source = request.url.searchParams.get("source");
  const especialista = request.url.searchParams.get("especialista");
  let text_especialista = "Gostaria de agendar uma consulta.";
  let text_source = "";

  if (especialista) {
    text_especialista = especialidades.filter(
      (especialidade) => especialidade.id.toString() === especialista
    )[0].text;
  }

  if (source) {
    text_source = ` Vim através da página ${source}.`;
  }

  const text = encodeURI(`${text_especialista}${text_source}`);
  throw request.redirect(302, "https://wa.me/5588992499339?text=" + text);
};
