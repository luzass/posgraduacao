# Landing Pages de Pós-Graduação

Estrutura pensada para criar páginas individuais de alta conversão para cada curso de pós-graduação, com layout reutilizável e conteúdo separado por curso.

## Estrutura

- `index.html`: página inicial simples com links para os cursos cadastrados
- `shared/styles.css`: estilos globais reutilizáveis
- `shared/course-page.js`: renderização da landing page a partir dos dados do curso
- `cursos/<slug>/index.html`: entrada individual do curso
- `cursos/<slug>/content.js`: conteúdo específico do curso

## Curso já estruturado

- `cursos/enfermagem-urgencia-emergencia/`

## Deploy na Vercel

O projeto é estático e pode ser publicado diretamente na Vercel sem etapa obrigatória de build customizado.

Se desejar publicar cada curso em um subdomínio próprio, você pode:

1. Fazer deploy do projeto completo e apontar o subdomínio para a rota do curso.
2. Duplicar a pasta do curso e publicar cada uma como projeto separado.
3. Evoluir a base depois para leitura de múltiplos cursos com o mesmo template.

## Próximo passo

Quando as imagens de cada seção forem enviadas, basta adicioná-las nas pastas do curso e atualizar os caminhos no `content.js`.
