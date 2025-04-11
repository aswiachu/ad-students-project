import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class MainController extends Controller {
  @service studentsStore;
  @service flashMessages;

  get searchInp() {
    return this.studentsStore.searchInp;
  }

  get updateSearch() {
    return this.studentsStore.updateSearch;
  }

  get applySearchFilter() {
    return this.studentsStore.applySearchFilter;
  }

  get bulkDeletion() {
    return this.studentsStore.bulkDeletion;
  }
}
