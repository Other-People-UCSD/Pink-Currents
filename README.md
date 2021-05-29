## Refer to the changelog for updates
### This forked repository does not deploy to GitHub Pages.

See the `CHANGELOG.md` for a summary of updates.

[Pull Request Demo](https://github.com/Kevin-Jjang/Pink-Currents/pull/1)

### Agenda
- [x] Create wireframes for includes logic
- [ ] Create wireframes for JS logic
- [ ] Review wireframes with Eunsoo
- [ ] Refactor the includes folder (three headers and two mobile navs)


### Jekyll Repository File Map

```
otherpeoplesd.com/
| 
├── _includes           # (Ignore) Header/footer templates
├── _layouts            # Layouts for pages; should be refactored further
├── _posts              # Published posts
├── _drafts             # Unpublished posts
|
├── uploads             # Folder for media and images from forestry.io
├── _sass               # CSS with variables
├── assets              # Styling the website
|   ├── css             # Consolidates the sass files into one
|   ├── favicons
|   ├── fonts           # Basier Mono Circle
|   └── js              # Functionality for interactive elements
|
├── index.html          # Homepage
├── submissions.md      # Submissions Page
├── team.md             # Team Page
├── about.md            # About Page
├── fiction.html        # Fiction Page
├── nonfiction.html     # Nonfiction Page
├── poetry.html         # Poetry Page
├── search.md           # Implemented by search layout
├── 404.html            # 404 Not Found Page
|
|
├── _config.yml         # Configuration for Jekyll website
├── Gemfile             # Builds the Jekyll website
|
└── .forestry           # 3rd party CMS manager for non-developers
    ├── front_matter/templates  # Configures front matter on selected titles
    └── settings.yml    # Configuration to preview site on forestryio
```