---
breadcrumbs:
  - title: 'Page 1'
    href: '#page1'
  - title: 'Page 2'
    href: '#page2'
  - title: 'Page 3'
    href: '#page3'
---

# Examples

{% include typography/badge.html text="Prototype" %}

{% include typography/callout.html text="This is a callout." %}

{% include typography/callout.html text="This is also a callout." style="info" %}

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

{% include forms/control-input.html options="Yes|No|Maybe" question="Do you like pie?" %}

{% include forms/control-input.html options="Yes|Absolutely|100%" type="checkbox" question="Do you like checking boxes?" %}

{% include navigation/breadcrumbs.html breadcrumbs=page.breadcrumbs %}

{% include typography/accordian.html open=true summary="Accordian Titles" content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet est et massa dignissim blandit tincidunt a mauris. Vestibulum porta nec orci in pretium. Integer quis nunc in ipsum tempor rhoncus. Aenean vitae orci eget enim pharetra faucibus.</p><p>In hac habitasse platea dictumst. Integer non laoreet magna, in eleifend quam. Sed ornare laoreet mauris, a interdum libero aliquam sit amet. Nullam sollicitudin lacus sed pulvinar tincidunt. Quisque pharetra eu ante dignissim auctor. Sed sed fermentum tortor. Duis condimentum finibus est ultrices rutrum. Nunc in massa id dui varius malesuada. Sed a velit scelerisque, aliquet velit in, volutpat nibh.</p>" %}

{% include typography/accordian.html open=false summary="Accordian Titles" content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet est et massa dignissim blandit tincidunt a mauris. Vestibulum porta nec orci in pretium. Integer quis nunc in ipsum tempor rhoncus. Aenean vitae orci eget enim pharetra faucibus.</p><p>In hac habitasse platea dictumst. Integer non laoreet magna, in eleifend quam. Sed ornare laoreet mauris, a interdum libero aliquam sit amet. Nullam sollicitudin lacus sed pulvinar tincidunt. Quisque pharetra eu ante dignissim auctor. Sed sed fermentum tortor. Duis condimentum finibus est ultrices rutrum. Nunc in massa id dui varius malesuada. Sed a velit scelerisque, aliquet velit in, volutpat nibh.</p>" %}

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
