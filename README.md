<h1 align="center" id="title">React Multi-Select Autocomplete Component with Rick and Morty API</h1>

<p align="center"><img src="https://socialify.git.ci/buseugrs/multi-select-autocomplete/image?language=1&amp;name=1&amp;owner=1&amp;pattern=Circuit%20Board&amp;theme=Light" alt="project-image"></p>

<p id="description">This project includes a multi-select autocomplete component developed using Typescript and GraphQL. This project includes a multi-select autocomplete component developed using Typescript and GraphQL. The component is designed to search select and delete characters using the Rick and Morty API.</p>

<p align="center"><img src="https://img.shields.io/badge/VSCode-%23007ACC?logo=visualstudiocode&amp;logoColor=%23007ACC&amp;labelColor=white" alt="shields"> <img src="https://img.shields.io/badge/React-%2361DAFB?logo=react&amp;logoColor=%2361DAFB&amp;labelColor=white" alt="shields"> <img src="https://img.shields.io/badge/TypeScript-%233178C6?logo=typescript&amp;logoColor=%233178C6&amp;labelColor=white" alt="shields"> <img src="https://img.shields.io/badge/GraphQL-%23E10098?logo=graphql&amp;logoColor=%23E10098&amp;labelColor=white" alt="shields"></p>

<h2>🚀 Demo</h2>

<a href="https://ip-address-tracker-psi-beige.vercel.app/" target="_blank" rel="noreferrer"> Multi-Select Autocomplete Component </a>

<h2>Project Screenshots:</h2>

| Desktop | Tablet | Mobile |
| :---: | :---: | :---: |
| <img src="https://private-user-images.githubusercontent.com/112654875/310485963-fe62ca50-3db1-4747-9aef-7cb0823211dc.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk3MjY4ODMsIm5iZiI6MTcwOTcyNjU4MywicGF0aCI6Ii8xMTI2NTQ4NzUvMzEwNDg1OTYzLWZlNjJjYTUwLTNkYjEtNDc0Ny05YWVmLTdjYjA4MjMyMTFkYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNlQxMjAzMDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMTczOWU5MGMwNTQyM2JjYzFlMjg4ZjZiMDJmZWQ3ZjlkZWM4ODg0ZjcwOTZmZjlmOTgyMmU5YmJlZTg5MjBjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.qNqq3aApMqH-VrwNcD1tbPp51gjThCdFw0FoddIgsYc">| <img src="https://private-user-images.githubusercontent.com/112654875/310485971-fbc60bcb-6541-49a5-a544-d23a5840b307.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk3MjY4ODMsIm5iZiI6MTcwOTcyNjU4MywicGF0aCI6Ii8xMTI2NTQ4NzUvMzEwNDg1OTcxLWZiYzYwYmNiLTY1NDEtNDlhNS1hNTQ0LWQyM2E1ODQwYjMwNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNlQxMjAzMDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iMGQwM2FhNmUxMjdjMjhmZmRiOWYxN2JjMmIzNWQ2YzU0N2U3YWJjOWQyNTNiZTU4MGQwNTcwNzUwNzc2ZmMwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.E3TSTqyh5HLGZmghHstXqzOKFeG9-1YU05cBAN7YnZQ">| <img src="https://private-user-images.githubusercontent.com/112654875/310485956-4503fced-daef-419a-8ce7-222f8c274389.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk3MjY4ODMsIm5iZiI6MTcwOTcyNjU4MywicGF0aCI6Ii8xMTI2NTQ4NzUvMzEwNDg1OTU2LTQ1MDNmY2VkLWRhZWYtNDE5YS04Y2U3LTIyMmY4YzI3NDM4OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwNlQxMjAzMDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05OTc5MWIwOTkxZDBmY2ZkMTM2NGFhNjhjOGJiMzNlZGJiZGMzMmU0ZmNhMzU2YmY1NjY5YmZiNjg2MDJhMDZkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.9mqvNUx3-qL2Iv3xFNh748I6J3mn-2qvADHwouywuOQ">|

<h2>🧐 Features</h2>

Here're some of the project's best features:

*  Multi-select autocomplete component.
*  Making an API query with the query written in the input field and listing the results in a popup.
*  The listed results show the character picture, name and information about how many episodes were played in for each character.
*  Highlighting the word typed for query in the listed results.
*  Adding and subtracting the selected results to the input field.
*  Loading state display.
*  Keyboard navigation.

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the repository</p>

```
git clone https://github.com/buseugrs/ip-address-tracker.git
```

<p>2. Install npm modules</p>

```
npm install
```

<p>3. Start development server using below command</p>

```
npm start
```
