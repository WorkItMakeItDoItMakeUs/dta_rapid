---
---
{% include sidebar.html %}

# Forms

Forms normally end up being the method of transaction for government-y user
journeys. It's important we have a toolit which let's us rapidly prototype
different types of forms...

### Here are some form inputs:

<form>
{% include text_input.html name="text-input" label_text="Text Input" id="text" %}
{% include radio_buttons.html id="foo" question="Choose an option" answers="Yes|No|Maybe" %}
</form>

