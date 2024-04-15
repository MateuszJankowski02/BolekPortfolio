import { ref, reactive, useSupabaseClient, useAsyncData } from '#imports';

export default function useSignedURLs() {
    const supabase = useSupabaseClient();
    const signedURLsCount = ref(0);
    const signedURLs = reactive([]);

    const fetchImages = async () => {
        const {data: images, error} = await useAsyncData('images', async () => {
            const {data, error} = await supabase.storage.from('images').list();
            if (error) throw error;
            return data;
        });
        images.value.forEach(image => getSignedURL(image.name));
    }

    const imagesList = ref(fetchImages());

    const getSignedURL = async (image) => {
        const { data, error } = await supabase.storage.from('images').createSignedUrl(image, 60);
        if (error) {
            throw error;
        }
        signedURLs.push(data.signedUrl);
    };

    return { signedURLs, signedURLsCount, imagesList }
}