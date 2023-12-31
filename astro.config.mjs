import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Thompson Total Branding',
      social: {
        // github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        // {
        //   label: 'Guides',
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     {label: 'Example Guide', link: '/guides/example/'},
        //   ],
        // },
        // {
        //   label: 'Reference',
        //   autogenerate: {directory: 'reference'},
        // },
        // A link to the CSS & Styling guide.
        {label: 'TTB Overview', link: '/overview/'},
        {label: 'The Planning Cycle', link: '/the-planning-cycle/'},
        {
          label: 'Where are we now',
          // Collapse the group and its autogenerated subgroups by default.
          autogenerate: {directory: 'where-are-we-now'},
        },
        {
          label: 'Why Are We There',
          // Collapse the group and its autogenerated subgroups by default.
          autogenerate: {directory: 'why-are-we-there'},
        },
        {
          label: 'Where Could We Be',
          // Collapse the group and its autogenerated subgroups by default.
          autogenerate: {directory: 'where-could-we-be'},
        },
        {
          label: 'How Can We Get There',
          // Collapse the group and its autogenerated subgroups by default.
          autogenerate: {directory: 'how-can-we-get-there'},
        },
        {
          label: 'Are We Getting There',
          // Collapse the group and its autogenerated subgroups by default.
          autogenerate: {directory: 'are-we-getting-there'},
        },
      ],
      customCss: ['./src/tailwind.css'],
    }),
    tailwind({applyBaseStyles: false}),
  ],
});
