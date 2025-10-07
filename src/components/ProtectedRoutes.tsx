import React, { useEffect } from 'react';
import { useUserStore } from '../stores/userStore';
import { useGeneralStore } from '../stores/generalStore';

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const userId = useUserStore((state) => state.id);
  const toggleLoginModal = useGeneralStore((state) => state.toggleLoginModal);
  const openLoginModal = useGeneralStore((state) => state.openLoginModal);

  useEffect(() => {
    console.log('ProtectedRoutes rendered, userId:', userId);
    /*  toggleLoginModal(); */
    if (!userId) {
      openLoginModal();
      /* toggleLoginModal(); */
    }
  }, [toggleLoginModal, openLoginModal, userId]);

  if (userId) {
    return children;
  } else {
    return <div className="flex justify-center">Log&nbsp;in</div>;
  }
};

export default ProtectedRoutes;
