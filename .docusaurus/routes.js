
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
  component: ComponentCreator('/blog','795'),
  exact: true,
},
{
  path: '/blog/2020-12-9-glitchs-new-project-privacy-feature',
  component: ComponentCreator('/blog/2020-12-9-glitchs-new-project-privacy-feature','bed'),
  exact: true,
},
{
  path: '/blog/2020-12-9-welcome-to-the-blog',
  component: ComponentCreator('/blog/2020-12-9-welcome-to-the-blog','d33'),
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
  path: '/blog/tags/feature',
  component: ComponentCreator('/blog/tags/feature','f25'),
  exact: true,
},
{
  path: '/blog/tags/glitch',
  component: ComponentCreator('/blog/tags/glitch','80d'),
  exact: true,
},
{
  path: '/blog/tags/privacy',
  component: ComponentCreator('/blog/tags/privacy','ff0'),
  exact: true,
},
{
  path: '/blog/tags/projects',
  component: ComponentCreator('/blog/tags/projects','738'),
  exact: true,
},
{
  path: '/blog/tags/welcome',
  component: ComponentCreator('/blog/tags/welcome','387'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','908'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','8db'),
  exact: true,
},
{
  path: '/docs/collection/get-all-projects',
  component: ComponentCreator('/docs/collection/get-all-projects','f9d'),
  exact: true,
},
{
  path: '/docs/editor/add-custom-domain',
  component: ComponentCreator('/docs/editor/add-custom-domain','e39'),
  exact: true,
},
{
  path: '/docs/editor/get-project-terminal',
  component: ComponentCreator('/docs/editor/get-project-terminal','27b'),
  exact: true,
},
{
  path: '/docs/editor/get-realtime-logs-for-a-project',
  component: ComponentCreator('/docs/editor/get-realtime-logs-for-a-project','a6c'),
  exact: true,
},
{
  path: '/docs/editor/list-all-custom-domains',
  component: ComponentCreator('/docs/editor/list-all-custom-domains','aed'),
  exact: true,
},
{
  path: '/docs/editor/readme',
  component: ComponentCreator('/docs/editor/readme','6df'),
  exact: true,
},
{
  path: '/docs/project/get-project',
  component: ComponentCreator('/docs/project/get-project','59a'),
  exact: true,
},
{
  path: '/docs/project/get-project-readme',
  component: ComponentCreator('/docs/project/get-project-readme','fc4'),
  exact: true,
},
{
  path: '/docs/users/get-user-by-id',
  component: ComponentCreator('/docs/users/get-user-by-id','7a0'),
  exact: true,
},
{
  path: '/docs/users/get-user-by-login',
  component: ComponentCreator('/docs/users/get-user-by-login','5f7'),
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
