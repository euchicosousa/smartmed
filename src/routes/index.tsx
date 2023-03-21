import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<div class="max-w-md flex justify-between flex-col gap-8 p-8">
			<div class="mb-4">
				<img src="/logov.png" class="mx-auto h-32" alt="" />
			</div>
			<div class="links">
				<a
					href="https://wa.me/5588997925279?text=Gostaria de agendar uma consulta."
					class="link link-primary"
				>
					Agende sua consulta
				</a>

				<a href="https://instagram.com/smartmed_ceara" class="link">
					<span class="hidden md:block">
						Conheça nossas especialidades
					</span>
					<span class=" md:hidden">Nossas especialidades</span>
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
			{/* <div>
				<img src="/toro.png" class="w-16 mx-auto" alt="" />
			</div> */}
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
