---
layout: conversational
---

<form class="scroll-form__form">

<div class="scroll-form__questionset">
  <section class="scroll-form__question">
    {% include forms/date-field.html label="Question 0" className="scroll-form__text-field" %}
  </section>
</div>

<div class="scroll-form__questionset">
  <section class="scroll-form__question">
    {% include forms/text-field.html label="Question 1" className="scroll-form__text-field" %}
  </section>
</div>

<div class="scroll-form__questionset">
  <section class="scroll-form__question">
    {% include forms/text-field.html label="Question 2" className="scroll-form__text-field" %}
  </section>
</div>

<div class="scroll-form__questionset">
  <section class="scroll-form__question">
    {% include forms/multiple-choice.html options="Yes|No|Maybe" question="Do you like pies?" className="scroll-form__multiple-choice" %}
  </section>
</div>

<footer class="scroll-form__footer">
  <div class="wrapper">
    {% include buttons/link-button.html onclick="technologic.next(); return false;" text="Next" %}
  </div>
</footer>

</form>
