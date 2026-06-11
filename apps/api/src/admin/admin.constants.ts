/**
 * Superadmin email is read from the SUPERADMIN_EMAIL environment variable.
 * This account is permanently protected — no role change, suspension, or deletion.
 *
 * Set SUPERADMIN_EMAIL in your .env file to configure the protected admin account.
 */
export const SUPERADMIN_EMAIL = (process.env.SUPERADMIN_EMAIL || '').toLowerCase();
