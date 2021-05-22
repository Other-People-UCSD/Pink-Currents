# Changes
- Included the default Jekyll gemfile to properly run (`bundle exec jekyll serve --incremental`) Jekyll locally.
- Created a pull request template to strengthen control over collaborative changes towards Collection creation, design changes, development implementations.
- Restructured the post permalinks to remove the date and the file extension. The dates are irrelevant to a literary magazine that publishes posts in Collections and a shorter permalink makes it easier to remember and share amongst each other. Removing the file extension hides the implementation details and makes the URLs more professional.
- Included a 404 Page Not Found page to address the change to permalinks :)
  - 404 Pages can show something humorous and it's open to design ideas
- Even prior to permalinks being removed, Jekyll was giving a warning about two similarly named posts. `2020-04-03-skin.md` and `2020-04-06-skin.md` displayed a warning shown in the screenshot below. To address this with the new permalink style, I included the author's last name to the post title, but I can change it to `title-firstName-lastName` if you'd like.
![image](https://user-images.githubusercontent.com/60748722/119217250-d6183d80-ba8d-11eb-9eda-78771406b804.png)
