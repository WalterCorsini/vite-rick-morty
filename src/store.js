import { reactive } from 'vue';

export const store = reactive ({
    status: ["All","Dead","Alive","unknown"],
    selectedStatus:"All",
    list: [],
});