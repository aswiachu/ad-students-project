export default function () {
  let duration = 500;
  this.transition(
    this.fromRoute(''),
    this.toRoute('add'),
    this.use('toLeft'),
    this.reverse('toRight'),
  );

  this.transition(
    this.childOf('#submit-btn'),
    this.use('toLeft', { duration }),
  );
  this.transition(this.childOf('table'), this.use('toLeft', { duration }));

  this.transition(
    this.hasClass('students'),
    this.toValue(true),
    this.use('toLeft', { duration }),
    this.reverse('toRight', { duration }),
  );
}
