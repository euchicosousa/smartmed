import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { especialidades } from "~/lib/data";

export default component$(() => {
	return (
		<div class="max-w-md flex justify-between flex-col gap-8 p-8">
			<div class="mb-4">
				<img src="/logov.png" class="mx-auto h-32" alt="" />
			</div>
			<div class="links">
				<div class={"p-2 text-center pb-0 font-bold"}>NOVIDADE</div>
				<a href="/whatsapp" class="link link-primary">
					Agende seus exames laboratoriais
				</a>
				{/* <a href="/whatsapp" class="link">
					Agende sua consulta
				</a> */}
				<div class={"p-2 text-center leading-none font-bold"}>
					Agende sua consulta com um <br /> dos nossos especialistas
					abaixo:
				</div>

				<div class="grid grid-cols-2 gap-2 mb-4">
					{especialidades.map((especialidade) => (
						<a
							class="small-link"
							href={`/whatsapp?especialista=${especialidade.id}`}
							key={especialidade.id}
						>
							{especialidade.title}
						</a>
					))}
				</div>

				<a href="https://instagram.com/smartmed_ceara" class="link">
					<span class="hidden md:block">Conheça nossos médicos</span>
					<span class="md:hidden">Especialistas</span>
				</a>
				<a
					href="https://wa.me/5588997925279?text=Quero falar sobre exames."
					class="link"
				>
					<span class="hidden md:block">
						Quero falar sobre um exame que eu fiz
					</span>
					<span class="md:hidden">Falar sobre exames</span>
				</a>
			</div>

			<div class="font-bold text-center">
				smartmed -{" "}
				<span class="uppercase text-xs  tracking-widest font-medium">
					{" "}
					Especialista em você
				</span>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "SMARTMED - Especialista em você",
	meta: [
		{
			name: "description",
			content: "A primeira Clínica de Especialidades Médicas de Massapê",
		},
	],
};
