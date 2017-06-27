---
---
# dta_rapid Jekyll theme
[See example site](https://gtrogers.github.io/dta_rapid/)

This is a Jekyll theme designed for rapidly prototyping websites, built with the [GOV.AU UI-kit](https://github.com/govau/uikit/).

## Installation
Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "dta_rapid"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: dta_rapid
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install dta_rapid

## Usage
### CSS Compilation
CSS compilation through UIKit and node-sass run:

    $ npm install && npm run watch:sass

### Publishing a new version of your theme
Commit your changes and with a clean slate follow the prompts after running:

    $ make publish

Once the gem has been published you can then reference the new version in your Jekyll site.

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/gtrogers/dta_rapid. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development
To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, and `_sass` tracked with Git will be released.

## License
The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Attribution
The CSS and javascript used from this theme are compiled from - https://github.com/govau/uikit
