# emberfire-monkeypatch-issue

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd emberfire-monkeypatch-issue`
* `yarn install`
* `bower install`

## Testing the example

* `ember serve`
* Visit at [http://localhost:4200](http://localhost:4200).
* Open the development console
* Click on the "Create a comment" button
* Notice error in the development console

## Exaplanation

This issue occurs when a project including emberfire, and has a response to creating or updating a record that has an `included` section. I'm not actually sure if this is possible for models using the `FirebaseAdapter`. We ran in to this issue with a model that does not use `FirebaseAdapter`.

Example data can be found in the [comment adapter](https://github.com/amiel/emberfire-monkeypatch-issue/blob/master/app/adapters/comment.js#L13-L38).

