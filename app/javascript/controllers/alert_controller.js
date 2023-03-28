import { Controller } from "@hotwired/stimulus"
// Connects to data-controller="alert"
export default class extends Controller {
  static targets = ["alert", "close"];
  connect() {
    const targetEl = this.alertTarget;
    const triggerEl = this.closeTarget;
    const options = {
      transition: 'transition-opacity',
      timing: 'ease-out',
    };
    const dismiss = new Dismiss(targetEl, triggerEl, options);
  }
}
