# Changelog 
## v3.3.3.1 (5/17/23)
- End of Service version (succeeded by [Calla-Lily](https://github.com/Other-People-UCSD/Calla-Lily))
- Thank you for the memories Pink-Currents. Maybe some day you'll be of service again for the next developers of Other People Magazine! 

## v3.3.3 (4/20/23)
- Backup of Jekyll-Forestry.io codebase in response to Forestry's discontinuation.
- This is the last commit before reconfiguring for a new headless CMS, ideally Forestry.io's descendant TinaCMS.

## v3.3.2 (3/20/23)
- Published all individual website pieces for Collection No. 5, Eclipse.
- Removed mini-announcement on the homepage.
- Converted JQuery code into vanilla JS to remove a dependency that was not to a significant degree in the website. Refer to documentation `2023-03-20-removal-of-jquery.md` for this change.
- Dark theme improvements
  - Fixed problems in accessibility where buttons and links would appear invisible as they were the same color as the background
  - Created a script that would change a page to dark theme if a class or other identifier was found on the page. This makes it easier to reuse and update code on existing dark posts. A new front matter variable called "theme" is used in the Post.html layout to make this functionality non-developer friendly.
  - Updated "Missed Connections", "Human Geography", "Grandfather", "Little Doll"

## v3.3.1 (3/15/23)
- Updated announcement to recruit a website producer/developer.

## v3.3.0 (2/10/23) Start of Eclipse Build
- Publishing "Editors Note" and "Lament for the Old Man in Autumn" in Collection No. 5

## v3.2.9 (2/10/23) Refraction Final Release
- Uploaded digital experimental piece, "missed connections (1 unread post)"

## v3.2.8 (2/9/23)
- Reverted homepage to Refraction for website packaging before changing to Eclipse.
- Updated team page with current members and interns.
- Fixed tags on individual posts by adding a comma delimiter.
- Updated Maximalist Magazine link on UC Magazine page.
- Removed unused files (default layout, team page)

## v3.2.7 (2/9/23)
- Major organizational update to codebase. [Refer to documentation](https://github.com/Other-People-UCSD/Pink-Currents/blob/main/documentation/ADRs/2023-02-09-file-organization.md).

### v.3.2.6 (2/3/23)
- Renamed `master` branch to `main`.
- Changed homepage to Eclipse theme.

## v3.2.5 (2/3/23)
- Added copy-protections to protect published works from users. Refer to the ADR for more details.

### v3.2.4 (11/7/22)
- Uploaded illustrations for "Apathy" and "Broken Glass"

## v3.2.3 (10/29/22)
- Closed Collection No. 5 submissions
- Updated the submission page with FAQ and removed redundant phrases
- Closed design/social media team applications
- Removed announcement banner
- Uploaded illustrations for "Forty Percent Senseless" and "West Coast Elegies"
- Fixed typos in team page and UC Magazine page
- Added MIAC and Maximalist Magazine to the UC Magazine page

### v3.2.2 (9/19/22)
- Opened all team applications
- Changed announcement link to team applications

### v3.2.1 (8/29/22)
- Updated about/team page with current members
- Updated submissions page with theme
- Changed announcement headline to "submissions open status"
- Removed one unpublished draft
- Updated README with updated architecture
- Updated forestry.io configuration for thumbnails (needs to be extensively tested)

## v3.2.0 (5/20/22)
- Published Collection No. 4, Refraction.

### v3.1.8 (3/9/22)
- Resolving nokogiri and CommonMarker security vulnerabilities by updating the gemfile
- Updated gem for github pages from 219 to 225

## v3.1.7 (1/31/22)
- Published "The Ode To Venture Capitalism" and "Validation"
- Moved team page into about and renamed
- Slowed down the animation that changes the color theme on the homepage from 300ms to 800ms (coded in seconds).
- Reformatted the "post-cards" to enlarge the thumbnails and organize components line-by-line for better presentation
- Refactored the genre pages and homepage so the "post-card" is a modular component that can be used to iterate through the specified genre's array when it is included.  
- Removed unused files (drafts that we did not have permission to publish, unused templates, unused pages)
- Added a social footer into the menu and converted our social links to icons with ARIA support.
- Font Awesome Icon license: [https://fontawesome.com/license](https://fontawesome.com/license)

### v3.1.6 (1/20/22)
- Converted images into 80px height thumbnails to reduce the 50 MB network payload on the homepage and genre pages
- Made minor syntax fixes on more HTML validation issues

### v3.1.5 (1/12/22)
- Uploaded TAGS: VACCINE, VIGNETTES, SLICE OF LIFE to fiction
- TODO: Communicate with the design team about changes to the homepage's display of posts to improve new content writing piece visibility

### v3.1.4 (12/5/21)
- Uploaded missing illustrations and thumbnails for 火, c/o 2020, MoAM, Parasite, Tea for Sore Throat
- Developed a slideshow on the front page to cycle through more featured posts and links to Issuu collections.
- Resolved security vulnerabilites on Gemfile

### v3.1.3 (12/5/21)
- Closed Editorial team applications
- Changed announcment to reflect submissions status

## v3.1.2 (12/2/21)
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

