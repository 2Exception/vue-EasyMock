import Vue from 'vue'
import Router from 'vue-router'

// project module
import Project from '@/components/project/project'
import Person from '@/components/project/person'
import Team from '@/components/project/team'
import Workbench from '@/components/workbench/workbench'
import Dataview from '@/components/dataview/dataview'
import Doc from '@/components/doc/doc'
import Login from '@/components/login/login'
import Users from '@/components/users/users-info'
import Page404 from '@/components/page404'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior(to,from,position){
    if(position){
      return position;
    }else{
      return {x: 0,y :0};
    }
  },
  routes: [
    {
      path:'/',
      component: Person,
      alias: '/index',
    },
    {
      path: '/Project',
      component: Project,
      children: [
        {
          path: '/person',
          name: 'person',
          component: Person
        },
        {
          path: '/team',
          name: 'team',
          component: Team
        }
      ]
    },
    {
      path: '/workbench',
      name: 'workbench',
      component: Workbench
    },
    {
      path: '/dataview',
      name: 'dataview',
      component: Dataview
    },
    {
      path: '/docs',
      name: 'docs',
      component: Doc
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/users/:group?/:userId?',
      name: 'users',
      component: Users
    },
    {
      path: '/page404',
      name: 'page404',
      component: Page404
    },
    {
      path: '*',
      redirect(to){
        if(to.path === '/login1') {
          return '/login'
        }else if(to.path === '/projcet'){
          return '/project'
        }else {
          return '/page404'
        }
      }
    }


  ]
});

router.beforeEach((to,from,next)=>{
  // 获取 localStorage
  let info = router.app.$local.fetch('easy-mock');

  if(to.path !== '/login') {

    if(info.login){
      next();
    }else {
      router.push({
        path: '/login',
        query: {
          redirect: to.path.slice(1)
        }
      });

    }

  }else {
    next();
  }

})

export default router;
