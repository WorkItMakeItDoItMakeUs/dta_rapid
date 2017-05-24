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

### Radio buttons
{% include forms/control-input.html options="Yes|No|Maybe" type="radio" question="Do you like pie?" %}

### Checkboxes
{% include forms/control-input.html options="Yes|Absolutely|100%" type="checkbox" question="Do you like checking boxes?" %}

## Navigation
### Breadcrumbs
{% include navigation/breadcrumbs.html breadcrumbs=page.breadcrumbs %}

### In-page
{% include navigation/inpage.html links=page.links %}

{% include typography/badge.html text="Prototype" %}

<form id="form" data-parsley-validate="" data-parsley-error-class="invalid">

(Hidden error container below - hit submit button to show)

{% include forms/error-container.html text="Help text for when something goes wrong" %}

{% include forms/text-field.html id="text-field" label="Text input" %}

{% include forms/date-field.html id="date-field" label="Pick a date" %}

{% include forms/submit-button.html %}

</form>

{% include buttons/link-button.html text="Start" %}

{% include buttons/link-button.html onclick="alert('hello')" text="Control Button" %}

{% include buttons/upload-button.html id="upload_reciept" label="Upload reciept" %}

{% include forms/item-table.html %}

{% include forms/dropzone.html %}

{% include lists/suggestion-search.html placeholder="Some placeholder..." %}

&nbsp;

<script type="text/javascript">
  var items = [
    'Make a Claim',
    'Understand SafetyNet',
    'Update my bank details'
  ];

  localStorage.setItem('items', JSON.stringify(items));
</script>
