let PlanPickerItemComponent = {
    template: "#plan-picker-item-template",
    props: {
      name: { type: String, required: true },
      selected: { type: String, default: false },
    },
    methods: {
      select() {
        this.$emit("select", this.name);
      },
    },
  };
  
  let PlanPickerComponent = {
    components: { 'plan-picker-item': PlanPickerItemComponent },
    template: "#plan-picker-template",
    data() {
      return {
        plans: ["The Single", "The Curious", "The Addict"],
        selectedPlan: null,
      };
    },
      methods: {
      selectPlan(plan) {
          this.selectedPlan = plan;
          }
      }
  };
  const app = Vue.createApp({
    components: { planPicker: PlanPickerComponent },
  }).mount("#app");