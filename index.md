---
breadcrumbs:
  - title: 'Page 1'
    href: '#page1'
  - title: 'Page 2'
    href: '#page2'
  - title: 'Page 3'
    href: '#page3'

paragraphs:
  - 'Nullam quis aliquam massa. Nunc suscipit, nisi in facilisis tempus, lectus quam ullamcorper tellus, in rutrum ipsum tortor sed nisl.'
  - 'Pellentesque porttitor in turpis in ornare. Quisque posuere sapien accumsan malesuada rutrum. Nulla vitae ex lacinia, rutrum est eu, tincidunt justo. Donec et ullamcorper elit, sit amet vulputate ipsum. Nulla porttitor rutrum libero sit amet sodales. Maecenas tincidunt dapibus pretium.'

links:
  - text: 'Callouts'
    href: '#callouts'
  - text: 'Control inputs'
    href: '#control-inputs'
  - text: 'Navigation'
    href: '#navigation'
---

# Examples

{% include navigation/inpage.html links=page.links %}

## Callouts
{% include callouts/paragraph-callout.html text="Nullam quis aliquam massa. Nunc suscipit, nisi in facilisis tempus, lectus quam ullamcorper tellus, in rutrum ipsum tortor sed nisl." %}

{% include callouts/container-callout.html paragraphs=page.paragraphs %}

{% include callouts/calendar-callout.html lede="The next public holiday is:" date="Sunday 1 January" name="New Year's Day" %}

## Control inputs
### Checkboxes
{% include control-inputs/checkbox.html text="A" %}
{% include control-inputs/checkbox.html text="B" %}
{% include control-inputs/checkbox.html text="C" %}

### Radio buttons
{% include control-inputs/radio.html text="A" %}
{% include control-inputs/radio.html text="B" %}
{% include control-inputs/radio.html text="C" %}

## Navigation
### Breadcrumbs
{% include navigation/breadcrumbs.html breadcrumbs=page.breadcrumbs %}

### In-page
{% include navigation/inpage.html links=page.links %}

{% include typography/badge.html text="Prototype" %}

<form id="form" data-parsley-validate="" data-parsley-error-class="invalid">

(Hidden error container below - hit submit button to show)

{% include forms/error-container.html text="Help text for when something goes wrong" %}

{% include forms/text-field.html id="text-field" label="Text input" required=true %}

{% include forms/date-field.html id="date-field" label="Pick a date" required=true %}

{% include forms/submit-button.html %}

</form>

{% include buttons/link-button.html text="Start" %}

{% include buttons/link-button.html onclick="alert('hello')" text="Control Button" %}

{% include buttons/upload-button.html id="upload_reciept" label="Upload reciept" %}

{% include forms/radio-field.html options="Yes|No|Maybe" question="Do you like pie?" %}

{% include forms/multiple-choice.html options="Yes|No|Maybe" question="Do you like pies?" %}

{% include forms/multiple-choice.html options="Yes|Absolutely|100%" type="checkbox" question="Do you like checking boxes?" %}


{% include typography/accordian.html open=true summary="Accordian Titles" content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet est et massa dignissim blandit tincidunt a mauris. Vestibulum porta nec orci in pretium. Integer quis nunc in ipsum tempor rhoncus. Aenean vitae orci eget enim pharetra faucibus.</p><p>In hac habitasse platea dictumst. Integer non laoreet magna, in eleifend quam. Sed ornare laoreet mauris, a interdum libero aliquam sit amet. Nullam sollicitudin lacus sed pulvinar tincidunt. Quisque pharetra eu ante dignissim auctor. Sed sed fermentum tortor. Duis condimentum finibus est ultrices rutrum. Nunc in massa id dui varius malesuada. Sed a velit scelerisque, aliquet velit in, volutpat nibh.</p>" %}

{% include typography/accordian.html open=false summary="Accordian Titles" content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet est et massa dignissim blandit tincidunt a mauris. Vestibulum porta nec orci in pretium. Integer quis nunc in ipsum tempor rhoncus. Aenean vitae orci eget enim pharetra faucibus.</p><p>In hac habitasse platea dictumst. Integer non laoreet magna, in eleifend quam. Sed ornare laoreet mauris, a interdum libero aliquam sit amet. Nullam sollicitudin lacus sed pulvinar tincidunt. Quisque pharetra eu ante dignissim auctor. Sed sed fermentum tortor. Duis condimentum finibus est ultrices rutrum. Nunc in massa id dui varius malesuada. Sed a velit scelerisque, aliquet velit in, volutpat nibh.</p>" %}

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
