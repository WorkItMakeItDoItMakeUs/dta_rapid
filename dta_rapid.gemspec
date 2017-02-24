# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "dta_rapid"
  spec.version       = "0.2.14"
  spec.authors       = ["Gareth Rogers", "Andrew Carr", "Matt Chamberlain"]
  spec.email         = ["grogers@thoughtworks.com", "andrew@2metres.com", "mchamber@thoughtworks.com"]

  spec.summary       = %q{Converting the DTA UI kit (see https://github.com/AusDTO/gov-au-ui-kit) into a Jekyll theme}
  spec.homepage      = "https://github.com/gtrogers/dta_rapid"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.4"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
