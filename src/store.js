import { reactive } from 'vue';

export const store = reactive ({
    status: ["All","Dead","Alive","Unknown"],
    selectedStatus:"All",
    list: [],
});