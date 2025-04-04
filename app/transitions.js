export default function () {
    this.transition(
      this.fromRoute('main'),
      this.toRoute('students'),
      this.use('toLeft'),
      this.reverse('toRight'),
    );
    this.transition(
        this.fromRoute('posts.index'),
        this.toRoute('posts.new'),
        this.use('crossFade'),
        this.reverse('crossFade'),
      );
  }