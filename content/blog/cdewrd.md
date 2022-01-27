---
template: blog-post
title: cdewrd
publishedDate: 01-26-2022
description: A variant of wordle that uses latin words, in progress
featured: false
img: ../../static/images/workspace.png
imgAlt: View of author's monitors while working on this project
tags:
  - Latin
  - Wordle
  - Node
  - fs
  - javaScript
---

### cdewrd

Codeword, stylized cdewrd or c\_de w\_rd was inspired by my love of word games and the recent wordle craze. Given my experience working
with the romance languages, I thought it would be fun to try solving puzzles using latin words. This is currently a work in progres.

I started by sourcing a list of latin words. Finding a list was not difficult, however finding a list that I could easily work with proved harder than I expected. I ultimately happened upon an archived university project and downloaded the RAW file used as the data for a command line based interactive latin dictionary. The following image is an example of the data formatting.

<img src="../../static/images/latin_defs.png" alt="A list of latin words, their conjugations, and their definitions"></img>

Clearly I had to do some work on the file to get lists of just words. I created two scripts to run in the terminal, one which read the RAW data and converted it into lists of words separated by lengths, and another to remove any duplicate words and proper nouns. The results of the prior script can be seen below.

<img src="../../static/images/latin_lists.png" alt="multiple lists of latin words separated by lengths of 5, 6, 7, or 8 letters"> </img>

I will update this space as I continue to make progress.