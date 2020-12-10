
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','632'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','255'),
  exact: true,
},
{
  path: '/blog/tags/api',
  component: ComponentCreator('/blog/tags/api','c34'),
  exact: true,
},
{
  path: '/blog/tags/glitch',
  component: ComponentCreator('/blog/tags/glitch','80d'),
  exact: true,
},
{
  path: '/blog/tags/welcome',
  component: ComponentCreator('/blog/tags/welcome','387'),
  exact: true,
},
{
  path: '/blog/welcome-to-the-blog',
  component: ComponentCreator('/blog/welcome-to-the-blog','354'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','604'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','8db'),
  exact: true,
},
{
  path: '/docs/project/get-project',
  component: ComponentCreator('/docs/project/get-project','59a'),
  exact: true,
},
{
  path: '/docs/users/search',
  component: ComponentCreator('/docs/users/search','3ef'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
