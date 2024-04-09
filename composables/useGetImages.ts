import {useSupabaseClient} from "#imports";

export const useGetImages = () => {
    return useState('images', async () => {
        const supabase = useSupabaseClient();
        const { data } = await supabase.from('countries').select();
        return data;
    });
}