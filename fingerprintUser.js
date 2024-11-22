// Import Rupt SDK
import Rupt from "rupt";

// Function to fingerprint a user and redirect
async function fingerprintUser() {
  try {
    const { fingerprint_id, confidence } = await Rupt.getFingerprint({
      client_id: 'df27a3f1-2656-40cf-b545-a7a0a295c13b', // Use your client ID
      last_fingerprint: "", // Set to an empty string if no prior fingerprint exists
    });

    console.log("Fingerprint ID:", fingerprint_id);
    console.log("Confidence Level:", confidence);

    // Construct the redirect URL
    const redirectUrl = `https://idsync.rlcdn.com/420486.gif?partner_uid=${encodeURIComponent(fingerprint_id || 'unknown')}`;
    console.log("Redirecting to:", redirectUrl);

    // Redirect the user
    window.location.href = redirectUrl; 
  } catch (error) {
    console.error("Error fingerprinting user:", error);

    // Redirect even if there is an error
    const fallbackUrl = `https://idsync.rlcdn.com/420486.gif?partner_uid=unknown`;
    console.log("Redirecting to fallback URL:", fallbackUrl);
    window.location.href = fallbackUrl;
  }
}

// Call the function to test it
fingerprintUser();