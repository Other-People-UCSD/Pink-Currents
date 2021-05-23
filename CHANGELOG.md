### 3.0.3 (5/22/21)
- Refactored layouts for the four genres as well as the index.html file into defaultMain
  - Moved the dissimilar code into the main top-level pages
- 404 Page now has a header and footer due to refactoring layouts!

### 3.0.2 (5/22/21)
- Included the three Jekyll recommended plugins (feed, seo, sitemap) that improve search engine ranking (SEO). 
  - Feed creates an RSS feed for the posts
  - SEO Tag automatically adds the meta tags for better SEO and the previews you see when you share links
  - Sitemap was implicitly there but the plugin explicitly shows it. Sitemaps are used to help search engine bots crawl the website to index it for better SEO ranking.
- Cleaned up minor syntax of most files to prevent formatting errors

### 3.0.0 (5/21/21)
- Included the default Jekyll `Gemfile` to properly run (`bundle exec jekyll serve --incremental`) Jekyll locally.
- Created a pull request template in `.github/pull_request_template.md` to strengthen control over collaborative changes towards Collection creation, design changes, development implementations.
- Restructured the post permalinks to remove the date and the file extension. The dates are irrelevant to a literary magazine that publishes posts in Collections and a shorter permalink makes it easier to remember and share amongst each other. Removing the file extension hides the implementation details and makes the URLs more professional.
- Included a 404 Page Not Found page to address the change to permalinks :)
  - 404 Pages can show something humorous and it's open to design ideas
- **IMPORTANT: .gitignore** I included a `.gitignore` file that contains the default Jekyll gitignore for the following reasons:
  - _site is what actually gets deployed and is what you see on the website. GH Pages automatically integrates Jekyll into its build workflow, so _site is generated within GitHub's server. Jekyll's website even recommends ignoring this folder. In addition, _site is just a copy of all the files but in a final website-readable format. It basically doubles the size of the repository due to creating a copy of every image within the its uploads folder.
  - caches are for local deployment and have no impact on the final website.
  - vendor, while not usually on a Jekyll site, might appear if someone attempts to run `gem install`. It's used to locally install gems, so it has no impact on the final website.
- Prior to permalinks being removed, Jekyll was giving a warning about two similarly named posts. `2020-04-03-skin.md` and `2020-04-06-skin.md` displayed a warning shown in the screenshot below. To address this with the new permalink style, I included the author's last name to the post title, but I can change it to `title-firstName-lastName` if you'd like.

![image](https://user-images.githubusercontent.com/60748722/119217250-d6183d80-ba8d-11eb-9eda-78771406b804.png)

