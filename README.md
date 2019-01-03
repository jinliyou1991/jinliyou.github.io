# Bio-asp Lab

A website to let everyone knows Bio-asp Lab

## Documentation

Follow the details if you want to add information into the website:

### To add people/alumni:

Search for keyword 'add people here' or 'add alumni here' in index.html and
follow the existing structure.

### To add news:

Search for keyword 'add news here' in index.html. Please search icons here:
https://material.io/tools/icons/?style=baseline. To navigate to _about_/_publication_
section, please add _to-people_/_to-publication_ class of the anchor.

### To add research field

Search for keyword 'add research here' in index.html and follow the existing
structure.

### To add conference papers

Search for keyword 'add paper of conference here' in js/publication.js. And add
a new conference into 'papers' object by giving following information of the
paper:
<pre>
{
  'imgPath': 'img/conference/img-name.jpg',
  'filePath': 'paper/conference/paper-name.pdf',
  'year': year-of-publication,
  'name': 'Name of the paper',
  'author': 'Authors' name',
  'conference': 'Conference's name',
  'demo': ['description1', 'audio/src/1', 'description2', 'audio/src/2',...]
}
</pre>

### To add journals

Search for keyword 'add paper of journal here' in js/publication.js. And add a
new journal into 'journals' object by giving following information of the
journal:
<pre>
{
  'imgPath': 'img/journal/img-name.jpg',
  'filePath': 'paper/journal/journal-name.pdf',
  'year': year-of-publication,
  'name': 'Name of the journal',
  'author': 'Authors' name',
  'conference': 'Conference's name',
  'demo': ['description1', 'audio/src/1', 'description2', 'audio/src/2',...]
}
</pre>

### To add books

Search for keyword 'add books here' in publication.html. And add a new book by
following the existing structure. Also, put the img under img/book and the pdf
under paper/book.

### To add other materials

Search for keyword 'add others here' in publication.html. And add a new material
by following the existing structure. Also, put the img under img/other and the
pdf under paper/other.

### To add contact

Search for keyword 'add contact here' in index.html and follow the existing
structure. Search needed icons here: https://material.io/tools/icons/?style=baseline.

### Generating first page of pdf as img

Please refer to pdf\_as\_img.sh.
