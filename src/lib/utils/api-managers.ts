export const handleSubmitEntry = async ({
    formData,
    onSuccess,
    onError,
}: {
    formData: any;
    onSuccess: () => void;
    onError: () => void;
}) => {
    try {
        const res = await fetch('https://formspree.io/f/mwpqbwll', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await res.json();
        if (res?.status === 200) {
            onSuccess();
        } else {
            throw new Error(result?.error || 'Unknown error');
        }
    } catch (err: any) {
        console.log(err?.message);
        onError();
    }
};
