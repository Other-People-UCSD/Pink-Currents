### v3.1.3 (1/12/22)
- Uploaded TAGS: VACCINE, VIGNETTES, SLICE OF LIFE to fiction
- TODO: Communicate with the design team about changes to the homepage's display of posts to improve new content writing piece visibility

### v3.1.2 (12/5/21)
- Uploaded missing illustrations and thumbnails for 火, c/o 2020, MoAM, Parasite, Tea for Sore Throat

### v3.1.1 (12/5/21)
- Closed Editorial team applications
- Changed announcment to reflect submissions status

## v3.1.0 (12/2/21)
- Included Mailchimp newsletter subscription form in the footer

## v3.1.1 (7/7/21)
- Menu buttons: Removed the `<a>` tags and restyled buttons to underline text and change cursor to pointer on hover.
  - This improves SEO rating by issuing all `<a>` links as crawlable.
- Security: Added `rel="noopener"` to external links (Issu and Instagram). These are trusted websites, but "noopener" will ensure that no redirects are triggered by following these links.
- Tested alt text and Forestry configurations

## v3.1.0 (6/10/21)
- Uploaded Winter 2021 Collection no. 2. The following require further styling:
  - Blood Pacts
  - Little Doll
  - When the Party's Over
- Deleted the /assets/uploads folder as it wastes space since no images are referenced in any post

#### v3.0.7 (6/10/21)
- Fixed typos in genre pages
- Refactored logic in search script to reduce complexity
- TODO: Add search bar to 404 page

#### v3.0.6 (5/29/21)
- Fixed color with Menu text when scrolling to bottom of homepage
- Included the SVG arrow graphic to external links (Issuu, Instagram) for better UX visibility
- Fixed genre titles (because they were copy-pasted with Nonfiction's code)
- Class Name Semantics
  - SVG: `st0` -> `logoOutline`
  - Scroll background trigger: `hello` -> `w2b` and moved class onto "Keep Reading" heading
- ARIA screen reader search input on header nav. The search page does not screen-read properly.

### v3.0.5 (5/28/21)
- Now keyboard users can open the menu!
  - Hid the content in the menu when it is closed so tabbing will not go over those unshown elements. (Using vanilla JS, no JQuery)
  - Changed the `h2` tag on the Menu/Close to a `button` to allow keyboard users to tab onto the text and trigger the onclick function through a spacebar/enter key press.
  - Matched the Menu margins to the Close margins because it was possible to open the menu by clicking anywhere between the genres and menu keyword. Now you must click on the Menu/Close text in order to show/hide the menu. 
- Search page: moved the header includes prior to the content for proper tab-ordering.
- **HTML Validation**: changed all `h1` tags in the menu to `<ul><li><a>` because there should only be one heading one tag on an HTML page. 
  - Visually identical to v2.1.97


### v3.0.3 (5/22/21)
- Refactored layouts for the four genres as well as the index.html file into defaultMain.
  - Moved the dissimilar code into the main top-level pages.
- 404 Page now has a header and footer due to refactoring layouts!
- v3.0.4 Removed a redundant script to `search-script` in `mobile-nav.html`.

### v3.0.2 (5/22/21)
- Included the three Jekyll recommended plugins (feed, seo, sitemap) that improve search engine ranking (SEO). 
  - Feed creates an RSS feed for the posts.
  - SEO Tag automatically adds the meta tags for better SEO and the previews you see when you share links.
  - Sitemap was implicitly there but the plugin explicitly shows it. Sitemaps are used to help search engine bots crawl the website to index it for better SEO ranking.
- Cleaned up minor syntax of most files to prevent formatting errors.
  - Removed lots of newlines and whitespace.
  - Set spaces on some unstandardized pages back to 4.
  - Changed all occurrences of 1-up relative links `..` to `{{ site.baseurl }}`.
- **Bugfix**: unintentionally fixed an error with loading favicons on all posts
  - Posts have a link format of .../collection/date/title, so going up one directory meant favicons were attempted to be found in a non-existent date directory.
    - Post URL: `https://otherpeoplesd.com/1/2020/04/07/monotony.html`
    - Request URL: `https://otherpeoplesd.com/1/2020/04/assets/favicons/TheFavicon(64).png`
    - Actual URL: `https://otherpeoplesd.com/assets/favicons/TheFavicon(64).png`
  - Favicons were referenced through `..`, so changing this to `{{ site.baseurl }}` fixed the location the favicons were being searched under.

### v3.0.0 (5/21/21)
- Included the default Jekyll `Gemfile` to properly run (`bundle exec jekyll serve --incremental`) Jekyll locally.
- Created a pull request template in `.github/pull_request_template.md` to strengthen control over collaborative changes towards Collection creation, design changes, development implementations.
- Restructured the post permalinks to remove the date and the file extension. The dates are irrelevant to a literary magazine that publishes posts in Collections and a shorter permalink makes it easier to remember and share amongst each other. Removing the file extension hides the implementation details and makes the URLs more professional.
- Included a 404 Page Not Found page to address the change to permalinks :)
  - 404 Pages can show something humorous and it's open to design ideas.
- **IMPORTANT: .gitignore** I included a `.gitignore` file that contains the default Jekyll gitignore for the following reasons:
  - _site is what actually gets deployed and is what you see on the website. GH Pages automatically integrates Jekyll into its build workflow, so _site is generated within GitHub's server. Jekyll's website even recommends ignoring this folder. In addition, _site is just a copy of all the files but in a final website-readable format. It basically doubles the size of the repository due to creating a copy of every image within the its uploads folder.
  - caches are for local deployment and have no impact on the final website.
  - vendor, while not usually on a Jekyll site, might appear if someone attempts to run `gem install`. It's used to locally install gems, so it has no impact on the final website.
- Prior to permalinks being removed, Jekyll was giving a warning about two similarly named posts. `2020-04-03-skin.md` and `2020-04-06-skin.md` displayed a warning shown in the screenshot below. To address this with the new permalink style, I included the author's last name to the post title, but I can change it to `title-firstName-lastName` if you'd like.

![image](https://user-images.githubusercontent.com/60748722/119217250-d6183d80-ba8d-11eb-9eda-78771406b804.png)

