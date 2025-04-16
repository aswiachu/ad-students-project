export default function () {
  let duration = 500;
  // this.transition(
  //   this.fromRoute(''),
  //   this.toRoute('add'),
  //   this.use('toLeft'),
  //   this.reverse('toRight'),
  // );

  this.transition(
    this.childOf('#submit-btn'),
    this.use('toLeft', { duration }),
  );
  // this.transition(this.childOf('table'),
  //  this.use('toLeft', { duration }));

  // this.transition(
  //   this.hasClass('students'),
  //   this.toValue(true),
  //   this.use('toLeft', { duration }),
  //   this.reverse('toRight', { duration }),
  // );

  this.transition(
    this.fromRoute('liquid-fire.index'),
    this.toRoute('liquid-fire.left-right'),
    this.use('toLeft', { duration }),
    this.reverse('toRight', { duration }),
  );
  this.transition(
    this.fromRoute('liquid-fire.index'),
    this.toRoute('liquid-fire.up-down'),
    this.use('toUp', { duration }),
    this.reverse('toDown', { duration }),
  );
  this.transition(
    this.fromRoute('liquid-fire.index'),
    this.toRoute('liquid-fire.fade'),
    this.useAndReverse('crossFade', { duration }),
  );
  this.transition(
    this.fromRoute('liquid-fire.index'),
    this.toRoute('liquid-fire.scale'),
    this.useAndReverse('scale', { duration }),
  );
  this.transition(
    this.hasClass('liquid-bind-heading'),
    this.use('toDown', { duration }),
    this.reverse('toUp', { duration }),
  );
}
