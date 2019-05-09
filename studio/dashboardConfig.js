export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5cd4441832c8cca9fab7c1b2',
                  title: 'Sanity Studio',
                  name: 'TestGatsbySanity-studio',
                  apiId: '322eb270-ce44-446b-989e-a2000fa7acab'
                },
                {
                  buildHookId: '5cd44418d31f16c9c00451cd',
                  title: 'Portfolio Website',
                  name: 'TestGatsbySanity',
                  apiId: '24555f21-7e83-43f5-8a76-82dec0822171'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/WaylonWalker/TestGatsbySanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://TestGatsbySanity.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
