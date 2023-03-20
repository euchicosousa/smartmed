import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<div class="max-w-md flex justify-between flex-col gap-8 p-8">
			<div class="mb-4">
				<img src="/logo.png" class="mx-auto w-32" alt="" />
			</div>
			<div class="links">
				<a href="https://wa.me/5588992637940" class="link link-primary">
					Agende sua consulta
				</a>

				<a href="" class="link">
					Conheça nossas especialidades
				</a>
				<a href="" class="link">
					Quero falar sobre um exame que eu fiz
				</a>
			</div>
			<div>
				<img src="/toro.png" class="w-16 mx-auto" alt="" />
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
	title: "Fome de Toro",
	meta: [
		{
			name: "description",
			content: "Faça seu pedido pelo nosso WhatsApp",
		},
	],
};
