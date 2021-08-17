export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611b4dd3a290cfd8b32b86f5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kzxq59p2',
                  apiId: '11ad36dc-76ab-4c01-9b26-116fd2f18ff1'
                },
                {
                  buildHookId: '611b4dd4cea2b2c526bb51ca',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-buh595ki',
                  apiId: '90068c15-99b4-4b55-8d3b-29a960972c67'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/madegun/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-buh595ki.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
