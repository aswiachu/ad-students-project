export default function () {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('index.add'),
    this.use('crossFade'),
    this.reverse('crossFade'),
  );
}
