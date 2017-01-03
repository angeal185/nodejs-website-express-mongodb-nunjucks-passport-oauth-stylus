'use strict';
const _ = require('lodash');
const async = require('async');
const validator = require('validator');
const request = require('request');
const cheerio = require('cheerio');
const Github = require('github-api');

/*GET /api List of API examples.*/
exports.getApi = (req, res) => {
  res.render('api/index', {
    title: 'API Examples'
  });
};

exports.getGithub = (req, res, next) => {
  const token = req.user.tokens.find(token => token.kind === 'github');
  const github = new Github({ token: token.accessToken });
  const repo = github.getRepo('sahat', 'satellizer');
  repo.getDetails((err, repo) => {
    if (err) { return next(err); }
    res.render('api/github', {
      title: 'GitHub API',
      repo
    });
  });
};

/*GET /api/upload File Upload API example.*/
exports.getFileUpload = (req, res, next) => {
  res.render('api/upload', {
    title: 'File Upload'
  });
};

exports.postFileUpload = (req, res, next) => {
  req.flash('success', { msg: 'File was uploaded successfully.' });
  res.redirect('/api/upload');
};

exports.getGoogleMaps = (req, res, next) => {
  res.render('api/google-maps', {
    title: 'Google Maps API'
  });
};
