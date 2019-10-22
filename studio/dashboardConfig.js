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
                  buildHookId: '5daf1c24db6b9e9ed424497f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-exad4gw6',
                  apiId: '893367c1-4c2c-4c1c-b388-3db683d3caca'
                },
                {
                  buildHookId: '5daf1c25cc4e782428a71f76',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-e42yampo',
                  apiId: 'b1217a5b-237c-4f61-bc9c-56207b059b21'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Blake32p/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-e42yampo.netlify.com',
            category: 'apps'
          }
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
